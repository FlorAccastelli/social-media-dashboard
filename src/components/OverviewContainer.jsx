import data from '../../data/data.json';
import { OverviewCard, OverviewTodayCard } from './OverviewCard';

export const OverviewContainer = () => {

    const convertNumberToK = (number) => {
        if(number >= 10000) {
            number = number / 1000;
            return `${number}k`
        }
        return number;
    }

    return (
        <section className='w-[326px] absolute top-[191px] left-0 right-0 mx-auto'>
            {
                data.overview.map(object => {
                    return <OverviewCard 
                    key={object.id}
                    user= {object.user}
                    audience={convertNumberToK(object.audience)}
                    audienceType={object.audienceType}
                    network={object.network}
                    isUp={object.isUp}
                    today={object.today}
                    />
                })
            }
        </section>
        
    )
}

export const OverviewTodayContainer = () => {
    return (
        <div>
            {
                data['overview-today'].map(object => {
                    return <OverviewTodayCard 
                    key={object.id}
                    network={object.network}
                    statsType={object.statsType}
                    stats={object.stats}
                    porcentage={object.porcentage}
                    isUp={object.isUp}
                    />
                })
            }
        </div>
    )
}