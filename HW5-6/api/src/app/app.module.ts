import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AllFilterPipe } from 'src/pipes/filter.pipe';

import { CustomValidators } from 'src/models/customValidators';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SoldDirective } from 'src/directivies/soldDirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    AllFilterPipe,
    SoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
Домашнє завдання:
Зробити те ж саме, що ми робили на занятті але з іншим API (fake online rest)
Тобто: вивести дані і реалізувати додавання, модифікацію, видалення.
Важливим є не копіювати код з уроку, а написати власноруч (з метою закріплення матеріалу).
Розробити директиву, яка буде аналізувати довільне поле виведеної таблиці і підсвічувати його, якщо умова дійсна (Наприклад підсвітити ціну продукта, якщо ціна більша за 100).
Якщо є питання до умови, то пишіть.
 */

/* Зробити власну реактивну форму
Форма повинна мати один або більше дочірніх об'єктів і різні типи даних (boolean, number, Date, string)
Використати вбудовані валідатори, а також розробити власні (синхронний та асинхронний). Можна також розробити валідатор для FormGroup.
Реалізувати підписку на зміну одного поля і оновлення значення іншого поля.
На додатковий бал потрібно, щоб форма містила масив дочірніх об'єктів з можливістю додавання, видалення, редагування і валідацію
 */