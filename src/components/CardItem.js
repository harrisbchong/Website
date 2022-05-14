import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

    const website = () => window.open(props.href, '_blank');

    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item__pic-wrap' data-category={props.label} >
                        <img
                            className='cards__item__img'
                            alt='Travel'
                            src={props.src}
                            onClick={website}
                            target='_blank'
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                        <p className='cards__item__subtext'>{props.subtext}</p>
                    </div>
                </Link>
            </li>

        </>
    );
}

export default CardItem;