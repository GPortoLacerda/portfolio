import { Component } from '@angular/core';

@Component({
  selector: 'app-page-skills',
  templateUrl: './page-skills.component.html',
  styleUrls: ['./page-skills.component.scss']
})
export class PageSkillsComponent {

  skills = ['Java', 'TypeScript', 'JavaScript','Spring', 'Angular', 'Vue', 'node', 'git', 'Sql' ,'NoSql']

  constructor(){
    // setInterval(() => {
    //   this.carrossel()
    // }, 2600)
  }

  carrossel(){
    let primeiro = String(this.skills.shift())
    this.skills.push(primeiro)
  }
}