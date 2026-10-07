export default class Basetest{
constructor(page){
    this.page =page;
}
async NavigatetoURL(){
    await this.page.goto("https://www.google.com/");
}

}