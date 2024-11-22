const main = document.querySelector('main');
const load = document.querySelector('.load');
const maincontent = document.querySelector('.maincontent');

setInterval(getInfo, 30000)

const sentence = [
    'Please wait a moment ',
    'Your patience is appreciated, please hold on',
    "Just a second, I'm working on it"
]


let index = 0
let num = 0
let cloneNum = 0

const mySet = setInterval(() => {
    if (index <  sentence.length) {
        let x =  sentence[index]
        if (num < x.length) {
            load.innerHTML += x[num]
            num++
        }else if(num==x.length){
            cloneNum = num
            num++
        } else{
            console.log(x.length);
            
            if(cloneNum > 0){
                cloneNum--
                load.innerHTML = x.slice(0 , cloneNum)
            }else{
                index++
                num=0
            }
        }
    }
    else{

        index=0
    }
}, 200);



function getInfo() {
    const svgUrl = {
        "bitcoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
        "ethereum": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg',
        "tether": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
        "solana": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
        "binancecoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg',
        "ripple": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
        "dogecoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/74.svg',
        "usd-coin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
        "staked-ether": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3890.svg',
        "cardano": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2010.svg',
        "tron": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1958.svg',
        "shiba-inu": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5994.svg',
        "avalanche-2": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5805.svg',
        "wrapped-bitcoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/9104.svg',
        "the-open-network": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11419.svg',
        "wrapped-steth": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/18876.svg',
        "sui": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20947.svg',
        "bitcoin-cash": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1831.svg',
        "bitcoin-cash": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1831.svg',
        "weth": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/30126.svg',
        "chainlink": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1975.svg',
        'pepe': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/24478.svg',
        "polkadot": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6636.svg',
        "leo-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6892.svg',
        "stellar": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/512.svg',
        "near": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6535.svg',
        "litecoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2.svg',
        "aptos": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/21794.svg',
        "wrapped-eeth": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29270.svg',
        "uniswap": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7083.svg',
        "usds": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33440.svg',
        "crypto-com-chain": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32880.svg',
        "hedera-hashgraph": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6783.svg',
        "internet-computer": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7950.svg',
        "ethereum-classic": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32880.svg',
        "bonk": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/23095.svg',
        "kaspa": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20396.svg',
        "render-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3890.svg',
        "bittensor": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22974.svg',
        "ethena-usde": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5632.svg',
        "polygon-ecosystem-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7080.svg',
        "whitebit": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7431.svg',
        "dai": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4943.svg',
        "fetch-ai": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28782.svg',
        "dogwifcoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33788.svg',
        "mantra-dao": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7950.svg',
        "arbitrum": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11841.svg',
        "monero": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
        "blockstack": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11840.svg',
        "filecoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2280.svg',
        "mantle": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/27075.svg',
        "vechain": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3077.svg',
    
      }

    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => {
            if (res.ok){
                load.style.display='none'
                maincontent.style.display='block'
                return res.json();
            }
           Promise.reject(error)
        })
        .then(data => {
            maincontent.innerHTML = ''; 
        
            data.forEach(val => {
                const article = document.createElement('article');
                article.innerHTML = `
                    <h4>${val.market_cap_rank}</h4>
                    <figure>
                        <img src="${val.image}" alt="${val.name}">
                        <figcaption>${val.name} (${val.symbol.toUpperCase()})</figcaption>
                    </figure>
                    <h5>$ ${val.current_price.toFixed(2)}</h5>
                    <h5>$ ${val.high_24h.toFixed(2)}</h5>
                    <h5>$ ${val.low_24h.toFixed(2)}</h5>
                    <h5 class="percentage">${val.price_change_percentage_24h.toFixed(2)}%</h5>
                    <img class="svg" src="${svgUrl[val.id]}" alt="">
                `;

         
                const percentage = article.querySelector('.percentage');
                const image = article.querySelector('.svg');

                const change = parseFloat(val.price_change_percentage_24h);
                percentage.style.color = change > 0 ? 'rgb(20, 160, 20)' : change < 0 ? 'red' : 'black';
                image.style.filter = change > 0 
                ? 'hue-rotate(90deg) brightness(1.2)' 
                : change < 0 
                ? 'hue-rotate(300deg) saturate(190%) brightness(0.9) contrast(170%)' 
                : 'grayscale(1)'; 


                maincontent.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            maincontent.style.display='none'
            load.style.display='block'
        })
        
}




getInfo()
