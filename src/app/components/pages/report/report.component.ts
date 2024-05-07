import { Component, OnInit } from '@angular/core';

import { Report } from '../../../model/Report';
import { ReportService } from '../../../services/report.service';
import { Transaction } from '../../../model/Transaction';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit{

  constructor(private reportService: ReportService) { }

  public report!: Report;
  // public transactions!: Transaction[];

  displayedColumns: string[] = ['id', 'data', 'valor', 'contaOrigem', 'contaDestino'];
  public dataSource!: Transaction[];;
  
  ngOnInit(): void {
    this.reportService.getReport().subscribe((report)=>{
      this.report = report;
      this.dataSource = report.transactions;
      console.log(this.dataSource)
    });
  }

}
