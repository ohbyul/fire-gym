import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';

const WEATHER_API_URL = process.env.WEATHER_API_URL
const WEATHER_API_KEY = process.env.WEATHER_API_KEY

const timeText = moment().format('YYYY-MM-DD')

const getCurrentWeather = async (location: any) => {
    const url = `${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`;
    const res = await fetch(url)
    if (!res.ok) throw new Error('날씨 정보를 가져올수 없습니다.')

    return res.json()
}

export const Weather = async () => {
    const cityCode = 'Seoul'
    const cityName = '서울'
    const { current, location } = await getCurrentWeather(cityCode)


    return (
        <>
            <img
                src={`https:${current?.condition.icon}`}
                alt={current?.condition.text}
                width={30}
                height={30}
            />
            <div className='text-white-50'>
                {cityName} / {current?.temp_c}℃
            </div>
        </>

    );
};

export default Weather;