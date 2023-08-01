import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){}

  transform(url, title: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${url}/${title}.mp4`);
  }

}
