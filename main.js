
class Component{
    constructor(options){
        this.$el = document.createElement(options.componentTag);
        this.$el.classList.add(options.componentSelector);
        document.querySelector(options.rootSelector).appendChild(this.$el);
    }

    delete(){
        this.$el.remove();
    }

    hide(){
        this.$el.style.display="none";
    }

    shop(){
        this.$el.style.display="block";
    }
}

class Card extends Component{
    constructor(options){
        super({
            componentTag:'div',
            componentSelector:'card',
            rootSelector:'.wrapper'
        });
        this.name = options.name;
        this.email = options.email;

        this.photo = document.createElement('img');
        this.info = document.createElement('div');
        this.info.classList.add('card-info');
        this.title = document.createElement('h1');
        this.title.append(this.name);
        this.subtitle = document.createElement('p');
        this.subtitle.append(this.email);

        this.info.appendChild(this.title);
        this.info.appendChild(this.subtitle);
        this.$el.appendChild(this.photo);
        this.$el.appendChild(this.info);

    }



    setImg(src){
        this.photo.setAttribute("src" , src);
    }
}

function createCards(data,index = null){
    let cards = document.querySelectorAll('.card');
    if(cards.length){
        cards.forEach(card=>card.remove())
    }

    console.log(data.length)
    const users = data.filter(user => user['name'] == 'Ervin Howell');
    for(let i = 0; i<data.length;i++){
        const card = new Card({
            name:data[i]['name'],
            email:data[i]['email']

        })
        card.setImg("https://robohash.org/"+ Math.random() + i + "sold" + "?set=set3")
    }
}

function searchUser(){
    const name = document.querySelector('#search');
    console.log(name.value);
    let search = name.value.toString();
    request('GET' , requestURL,search);
}
