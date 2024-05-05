import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dvd } from '../../../models/dvd.interface';

@Component({
  selector: 'app-dvds-list',
  templateUrl: './dvds-list.component.html',
  styleUrl: './dvds-list.component.scss'
})
export class DvdsListComponent implements OnInit{
  constructor(private apiService: ApiService, private router: Router){}

  items: any = []

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.apiService.GetAllDvds().subscribe({
      next: (response) => {
        this.items = response;
      },
      error: (error) => console.error(error)
    })
  }

  create(){
    this.router.navigateByUrl("/dvds/new");
  }

  delete(id: number){
    this.apiService.DeleteDvd(id).subscribe({complete: () => this.getAll() });
    
  }
}
