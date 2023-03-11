import './Timeline.css'

import { Header } from '../../components/header/Header'
import { Separator } from '../../components/separator/Separator'
import { Tweet } from '../../components/tweet/Tweet'
import { FormEvent, useState, KeyboardEvent } from 'react'

export function Timeline() {
    const [newTweet, setNewTweet] = useState('')
    const [tweets, setTweets] = useState([
        'Meu Primeiro tweet!',
        'Teste',
        'Deu certo tweetar!'
    ])

    function createNewTweet(event: FormEvent) {
        event.preventDefault()

        if(newTweet === '') {
            return false
        }

        setTweets([newTweet, ...tweets])
        setNewTweet('')
    }

    function handleHotKeySumbit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setTweets([newTweet, ...tweets])
            setNewTweet('')
        }
    }

    return (
        <main className="timeline">
            <Header title='Home' />

            <form onSubmit={createNewTweet} className="new-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/analuisadev.png" alt="Ana Luisa" />
                    <textarea
                        value={newTweet}
                        id="tweet"
                        onKeyDown={handleHotKeySumbit}
                        placeholder="What's Happening?"
                        onChange={(event) => { setNewTweet(event.target.value) }}
                        >
                    </textarea>
                </label>

                <button type="submit">Tweet</button>
            </form>
            <Separator />
            {tweets.map(tweet => {
                return <Tweet key={tweet} content={tweet} />
            })}
        </main>
    )
}