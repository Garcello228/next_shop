import  { useState, useEffect } from 'react';
import Двоеточие from "./icone/Semiclone.svg"
import "./Timer.scss"



const CYCLE_DURATION_MS = (3 * 86400 + 23 * 3600 + 19 * 60 + 56) * 1000;

function Timer() {
    
    const [timeLeftMs, setTimeLeftMs] = useState<number>(0);

    useEffect(() => {
        const savedEndTime = localStorage.getItem("timer_end_time");
        const now = Date.now();
        let currentEndTime: number;

        if (savedEndTime) {
            const parsedTime = parseInt(savedEndTime, 10);
            // Если сохраненное время еще не истекло, используем его
            if (parsedTime > now) {
                currentEndTime = parsedTime;
            } else {
                // Если истекло, создаем новый цикл
                currentEndTime = now + CYCLE_DURATION_MS;
                localStorage.setItem("timer_end_time", currentEndTime.toString());
            }
        } else {
            // Если записи не было, создаем новую
            currentEndTime = now + CYCLE_DURATION_MS;
            localStorage.setItem("timer_end_time", currentEndTime.toString());
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTimeLeftMs(Math.max(0, currentEndTime - now));

        // 2. Запускаем ежесекундный интервал
        const interval = setInterval(() => {
            const currentNow = Date.now();
            let diff = currentEndTime - currentNow;

            if (diff <= 0) {
                currentEndTime = Date.now() + CYCLE_DURATION_MS;
                localStorage.setItem("timer_end_time", currentEndTime.toString());
                diff = CYCLE_DURATION_MS;
            }

            setTimeLeftMs(diff);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const format = (num : number) => String(Math.floor(num)).padStart(2, '0');

    const totalSeconds = Math.floor(timeLeftMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return (
        <div className="time">
            <ul className="time__list">
                <li className="time__list-item">
                    <p className="time__title">Days</p>
                    <h3 className="time__number">{format(days)}</h3>
                </li>
                <Двоеточие alt="" />
                <li className="time__list-item">
                    <p className="time__title">Hours</p>
                    <h3 className="time__number">{format(hours)}</h3>
                </li>
                 <Двоеточие alt="" />
                <li className="time__list-item">
                    <p className="time__title">Minutes</p>
                    <h3 className="time__number">{format(minutes)}</h3>
                </li>
                <Двоеточие alt="" />
                <li className="time__list-item">
                    <p className="time__title">Seconds</p>
                    <h3 className="time__number">{format(seconds)}</h3>
                </li>
            </ul>
        </div>
    );
}

export default Timer;