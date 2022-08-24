import DisplayMessages from './Greet';

const GameOfChance = () => {
      let x = 10;
      return (
        <div>
          <h2>Thanks Daveed {"+ " + x}</h2>
          <DisplayMessages />
      </div>
    );
  }


export default GameOfChance;