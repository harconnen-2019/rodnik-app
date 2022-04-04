import { FC } from 'react';
import Image from 'next/image';
// import Link from 'next/link';

import { INomer } from '../../models/i-nomer';

type Props = {
    nomer: INomer;
};

const Nomer: FC<Props> = ({ nomer }) => {
    return (
        <>
            <div className="mt-10">
                {nomer.corpus} {nomer.name}
            </div>
            <div className="w-80 h-56">
                <Image
                    src={`/static/img/nomera/${nomer.photo[0]}`}
                    alt="Picture of the author"
                    width={1200}
                    height={900}
                    // layout="fill"
                />
            </div>
        </>
    );
};

export default Nomer;
