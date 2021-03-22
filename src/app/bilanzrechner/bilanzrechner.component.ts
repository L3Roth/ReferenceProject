import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../../shared/budget-item.module';
import { UpdateEvent } from './budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-bilanzrechner',
  templateUrl: './bilanzrechner.component.html',
  styleUrls: ['./bilanzrechner.component.scss']
})
export class BilanzrechnerComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    //replace the item with updated/submitted item from form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    //update the total budget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }

}
