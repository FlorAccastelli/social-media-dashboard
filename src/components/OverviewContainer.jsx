import data from '../../data/data.json';
import { OverviewCard } from './OverviewCard';

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
                data.overview.map(element => {
                    return <OverviewCard 
                    key={element.id}
                    user= {element.user}
                    audience={convertNumberToK(element.audience)}
                    audienceType={element.audienceType}
                    network={element.network}
                    isUp={element.isUp}
                    today={element.today}
                    />
                })
            }
        </section>
        
    )
}