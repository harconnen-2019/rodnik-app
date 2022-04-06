import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { INomer } from '../../models/i-nomer';

type Props = {
    nomer: INomer;
};

const Nomer: FC<Props> = ({ nomer }) => {
    return (
        <>
            <Link href={`/nomera/${nomer.href}`}>
                <a>
                    <div className="relative shadow-xl  rounded-2xl hover:shadow-2xl transition duration-300 ease-in-out ">
                        <Image
                            className="rounded-2xl "
                            src={`/static/img/nomera/${nomer.photo[0]}`}
                            alt="Picture of the author"
                            width={1200}
                            height={900}
                            // layout="fill"
                        />
                        <div className="bg-white dark:bg-d-page p-4 rounded-b-2xl  absolute inset-x-0 bottom-0 h-24">
                            <div className="flex  flex-row justify-between ">
                                <p className="w-48  text-lg line-clamp font-bold">
                                    {nomer.name}
                                </p>
                                <div className="">
                                    <span className="ml-2 text-2xl">
                                        3700 ₽
                                    </span>
                                    <p>за к/место</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
};

export default Nomer;
