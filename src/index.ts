import { forkJoin} from 'rxjs';
import {ajax} from "rxjs/ajax";

const request = (url: string) => ajax.getJSON(url);
const observer =
    forkJoin({
        github: request('https://api.github.com/search/repositories?q=rxjs'),
        gitlab: request('https://gitlab.com/api/v4/projects?search=nodejs'),
    });


observer.subscribe({
    next: (value: any) => console.log('Next:', value),
    complete: () => console.log('Complete!'),
    error: (error) => console.log('Error!', error)
})