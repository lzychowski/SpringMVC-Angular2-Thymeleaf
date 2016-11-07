import { Tag } from '../../shared/model/tag'
import { NewsItem } from './news-item'

export class NewsRelease {
    id: number;
    name: string;
    image: string;
    imageText: string;
    tags: Tag[];
    items: NewsItem[];
}