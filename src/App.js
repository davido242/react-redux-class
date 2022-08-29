import DisplayMessages from './Greet';
import Taskeee from './task';

const GameOfChance = () => {
      let x = 10;
      return (
        <div>
          <h2>Thanks Daveed {"+ " + x}</h2>
          <DisplayMessages />
          <Taskeee />
      </div>
    );
  }


export default GameOfChance;