import classes from './About.module.css';
import AboutFigure from './assets/about-figure.svg';

function About() {
    return <div className={classes['about-container']}>
        <div className={classes['about']}>
            <h1>Sobre nós</h1>
            <div className={classes['about-section-container']}>
                <div className={classes['about-text']}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ullamcorper ut viverra felis orci, non. Non, ac convallis convallis aliquet leo neque. Luctus condimentum at condimentum purus. Varius urna congue bibendum nisi netus vitae risus. Viverra vulputate eu sollicitudin lorem odio mi, enim, pulvinar. Ipsum molestie commodo consequat nulla viverra. Imperdiet est purus et malesuada interdum. Nisl aliquam quam lectus augue.</p>
                    <p>Purus viverra nullam augue consectetur gravida. Porttitor in mi et convallis ipsum vulputate. Aliquam donec sollicitudin at maecenas arcu tempus, sit etiam. Nec cras adipiscing nec suspendisse nibh fermentum erat aliquet suspendisse. Blandit ultrices sollicitudin aliquam rhoncus mattis posuere sem elit. Sit tempus nec velit urna. Arcu sem dictumst accumsan nunc ut interdum gravida commodo.</p>
                    <p>Gravida eros accumsan adipiscing elementum iaculis amet. Sed aliquet pharetra, et sed mi bibendum scelerisque. Lorem lorem non purus in ligula et elit ipsum. Quis velit felis lacus ultrices dolor.</p>
                </div>
                <img src={AboutFigure} alt='about-figure' />
            </div>
        </div>
    </div>
};

export default About;
