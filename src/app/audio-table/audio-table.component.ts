import { Component, OnInit } from '@angular/core';
import { AudioRecord, AudioService } from './service/audio.service';


@Component({
  selector: 'app-audio-table',
  templateUrl: './audio-table.component.html',
  styleUrls: ['./audio-table.component.scss']
})
export class AudioTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'url'];
  dataSource: AudioRecord[] = [];
  selectedRecord: AudioRecord | null = null;

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.getAudioRecords().subscribe(records => {
      this.dataSource = records;
    });
  }

  onSelect(record: AudioRecord): void {
    this.selectedRecord = record;
  }

  isSelected(record: AudioRecord): boolean {
    return this.selectedRecord ? this.selectedRecord.id === record.id : false;
  }
}