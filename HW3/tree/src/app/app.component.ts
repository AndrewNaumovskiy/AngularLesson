import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TreeModel } from 'src/models/treeModel';
import { GetStructureHelper } from 'src/helpers/getStuctureHelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  root: TreeModel = GetStructureHelper.GetStructure();

}
