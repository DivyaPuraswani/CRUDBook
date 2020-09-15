import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { BookService } from 'src/app/shared/book.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(public service: BookService, public toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }


  populateForm(b: Book) {
    this.service.formData = Object.assign({}, b);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteBook(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'Book. Register');
      });
    }
  }
}
