
const toast = document.getElementById('toast')
const emoji = document.getElementById('emoji')
const phrase = document.getElementById('phrase')
const image = document.getElementById('image')
const BASE_API = 'https://api.thecatapi.com/v1/images/search'

const phrases = [
    {
        emoji: '🤍',
        phrase: '"Eres un radiante rayo en la noche más obscura."'
    },
    {
        emoji: '🖤',
        phrase: '"Tú relentizas el tiempo."'
    },
    {
        emoji: '💜',
        phrase: '"El violeta de tu alma, es como un misterio de dulzura."'
    }
    ,
    {
        emoji: '💙',
        phrase: '"Eres como el cielo azul en un día soleado, siempre radiante y lleno de vida."'
    }
    ,
    {
        emoji: '💚',
        phrase: '"En mi corazón siempre habrá un lugar para ti, como un hermoso jardín verde lleno de flores y vida. Eres mi oasis de amor en un mundo sediento de ternura."'
    }
    ,
    {
        emoji: '💛',
        phrase: '"Tienes una energía solar."'
    }
    ,
    {
        emoji: '🧡',
        phrase: '"Tu naranja es como el sol, que ilumina mi camino."'
    }
    ,
    {
        emoji: '❤️',
        phrase: '"Eres la chispa que hace vivir al mundo."'
    }

    ,
    {
        emoji: '🌈',
        phrase: '"Eres un arcoíris para el mundo."'
    }

    ,
    {
        emoji: '🌼',
        phrase: '"Tienes una gloriosa mirada en tus ojos."'
    }

    ,
    {
        emoji: '🌼',
        phrase: '"Eres un angel de luz."'
    }

    ,
    {
        emoji: '🌼',
        phrase: '"Tu sonrisa hace que el mundo sea mejor."'
    }
    ,
    {
        emoji: '🌼',
        phrase: '"Eres un lugar de amor."'
    }
    ,
    {
        emoji: '🌼',
        phrase: '"Eres la razón por la que creo en el destino."'
    }
    ,
    {
        emoji: '🌼',
        phrase: '"https://www.youtube.com/watch?v=bLojUhnV_RQ"'
    }

   

]

const isToastVisible = (value) => toast.style.visibility = value

const setNewMichi = async () => {
    const response = await fetch(BASE_API)
    const michi = await response.json()
    image.src = michi[0].url
}

const setPhraseAndCloseToast = () => {
    isToastVisible('hidden')
    setNewMichi()
    const randomNumber = Math.floor(Math.random() * phrases.length)
    emoji.innerHTML = phrases[randomNumber].emoji
    phrase.innerHTML = phrases[randomNumber].phrase
}