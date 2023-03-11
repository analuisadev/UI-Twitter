import './Status.css'

import { Header } from '../../components/header/Header'
import { Separator } from '../../components/separator/Separator'
import { Tweet } from '../../components/tweet/Tweet'
import { FormEvent, useState, KeyboardEvent } from 'react'
import { PaperPlaneRight } from 'phosphor-react'

export function Status() {
    const [newAnswer, setNewAnswer] = useState('')
    const [answers, setAnswers] = useState([
        'Concordo...',
        'Olha, faz sentido!',
        'Parabéns pelo progresso.'
    ])

    function createNewAnswer(event: FormEvent) {
        event.preventDefault()

        if(newAnswer === '') {
            return false
        }

        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
    }

    function handleHotKeySumbit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([newAnswer, ...answers])
            setNewAnswer('')
        }
    }

    return (
        <main className="status">
            <Header title='Tweet' />
            <Tweet content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, cupiditate tenetur. Aliquid totam delectus eius odio reprehenderit in voluptatum, nobis voluptatem quos. Quibusdam quod ipsum nihil nostrum ex molestias sunt.' />
            <Separator />
            <form onSubmit={createNewAnswer}className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/analuisadev.png" alt="Ana Luisa" />
                    <textarea
                        id="tweet"
                        value={newAnswer}
                        onChange={(event) => setNewAnswer(event.target.value)}
                        onKeyDown={handleHotKeySumbit}
                        placeholder="Tweet your answer"
                    ></textarea>
                </label>

                <button type="submit">
                    <PaperPlaneRight/>
                    <span>Answer</span>
                </button>
            </form>

            {answers.map(answer => {
                return <Tweet key={answer} content={answer} />
            })}
        </main>
    )
}