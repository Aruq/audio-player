import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface AudioRecord {
  id: number;
  name: string;
  fileName: string;
  url: string;
}

@Injectable({
  providedIn: "root",
})
export class AudioService {
  constructor() {}

  getAudioRecords(): Observable<AudioRecord[]> {
    const audioRecords: AudioRecord[] = [
      {
        id: 1,
        name: "Sound 1",
        fileName: "SoundHelix-Song-1",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      },
      {
        id: 2,
        name: "Sound 2",
        fileName: "SoundHelix-Song-10",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      },
      {
        id: 3,
        name: "Sound 3",
        fileName: "SoundHelix-Song-12",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
      },
    ];
    return of(audioRecords);
  }
}
