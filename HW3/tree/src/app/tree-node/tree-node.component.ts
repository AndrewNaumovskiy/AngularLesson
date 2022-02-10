import { Component, OnInit, Input, forwardRef, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { TreeModel } from 'src/models/treeModel';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeNodeComponent implements OnInit {

  @Input()
  node!: TreeModel;

  @Output()
  removeMe: EventEmitter<TreeModel> = new EventEmitter<TreeModel>();

  isEditMode: boolean = false;

  lightUp: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  CreateChild() {
    this.node.children.push(new TreeModel("temp", []));
  }

  Remove(node: TreeModel) {
    this.removeMe.emit(node);
  }

  removeChild(event: TreeModel) {
    // clear children
    // (this.node as TreeModel).length = 0; // Funny!
    event.children = [];

    this.node.children.forEach((value: TreeModel, index: number) => {
      if (value == event) {
        this.node.children.splice(index, 1);
      }
    });
  }

  ToggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  LightsUp() {

    this.lightUp = true;

    setTimeout(() => {
      this.lightUp = false;
      console.log('off');
    }, 0);
  }
}
