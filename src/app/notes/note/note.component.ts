import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../model/note';
import {ApiService} from '../../shared/api.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input()
  note: Note;

  @Output()
  noteUpdated: EventEmitter<Note> = new EventEmitter<Note>();

  @Output()
  noteDeleted: EventEmitter<Note> = new EventEmitter<Note>();

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  updateNote() {
    this.noteUpdated.emit(this.note);
  }


  deleteNote() {
    this.noteDeleted.emit(this.note);
  }
}
