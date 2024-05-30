import data from '../../data/data.json';
import { OverviewCard } from './OverviewCard';

export const OverviewContainer = () => {
    return (
        <section>
            {
                data.overview.map(element => {
                    return <OverviewCard 
                    key={element.id}
                    user= {element.user}
                    audience={element.audience}
                    audienceType={element.audienceType}
                    network={element.network}
                    />
                })
            }
        </section>
        
    )
}