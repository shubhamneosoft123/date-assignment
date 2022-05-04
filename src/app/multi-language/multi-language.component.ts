import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-multi-language',
  templateUrl: './multi-language.component.html',
  styleUrls: ['./multi-language.component.css']
})
export class MultiLanguageComponent implements OnInit {

  constructor(public translateService: TranslateService) {

    this.translateService.addLangs(['English','Marathi','Gujrati'])
    this.translateService.setDefaultLang('English');
    this.translateService.use('English');

}

  ngOnInit(): void {
  }

}
