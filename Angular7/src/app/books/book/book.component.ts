import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/shared/book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(public service:BookService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.resetForm();
    this.service.formData= {
      BookID:null,
      Title:'',
      AuthorName:'',
      Price:null

    }
  }

  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form:NgForm)
  {
    this.service.postBook(form.value).subscribe(res=>
      {this.resetForm(form)});
      this.toastr.success('Inserted successfully', 'Book. Register');
      this.service.refreshList();
  }
  
  updateRecord(form:NgForm)
  {
    this.service.putBook(form.value).subscribe(res=>
      {this.resetForm(form)});
      this.toastr.info('Updated successfully', 'Book. Register');
      this.service.refreshList();


  }
}
