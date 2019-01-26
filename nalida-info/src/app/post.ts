export class Post {
    title: string;
    description: string;
    image?: string;
    tags?: string[];
    serialized_tags() {
        return this.tags ? this.tags.join(',') : '';
    }
}
