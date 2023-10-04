import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EngineerService } from 'src/app/services/engineer.service';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css']
})
export class EngineerListComponent implements OnInit {

  engineers: any;
  constructor(private router: Router, private engineerService: EngineerService) {
  }

  ngOnInit(): void {
    this.engineerService.getAll().subscribe(data => {
      this.engineers = data;
    });
  }

  updateform(engineer: any) {
    this.router.navigate(['/admin/update/engineer'], { queryParams: { engineer: JSON.stringify(engineer) } });
  }

  deleteForm(id: string) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.engineerService.deleteEngineer(id).subscribe(data => {
        alert("Success");
        this.engineerService.getAll().subscribe(data => {
          this.engineers = data;
        });
      });
    }
  }
}
