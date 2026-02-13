import React from 'react';
import { UseCountdown } from '/src/hooks/UseCountdown.jsx';
import '/src/index.css';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const DateTimeDisplay = ({ value, type }) => {
  const formattedValue = value.toString().padStart(2, '0'); // Ensure two digits
  return (
    <div className='countdown flex flex-col items-center font-vt323 font-[400] text-[#D9D9D9] '>
      <div className='mr-[10px] '>
        <p className='min-[3840px]:text-[150px] min-[3840px]:h-[15rem] xl:text-[85px] xl:h-[6rem] md:text-[60px] h-[4rem] max-[400px]:text-[30px] max-[400px]:h-[2.5rem] max-[640px]:text-[40px] max-[768px]:text-[45px] max-[768px]:h-[3rem] max-[640px]:h-[3rem]'>
          {type !== 'Days' && <span className="min-[3840px]:text-[140px] xl:text-[85px] max-[400px]:text-[30px] max-[768px]:text-[45px] max-[640px]:text-[40px] max-[640px]:h-[4rem] max-[640px]:ml-[0.5rem] text-[60px] ml-[1rem]">:</span>} {formattedValue}
        </p>
      </div>
      {type === 'Days' && <span className="min-[3840px]:text-[100px] xl:text-[35px] text-[25px] max-[400px]:text-[20px] max-[640px]:text-[22px] ml-[0.5rem] max-[768px]:ml-0 max-[640px]:ml-[0rem]">{type}</span>}
      {type === 'Hours' && <span className="min-[3840px]:text-[100px] xl:text-[35px] xl:ml-[4rem] text-[25px] max-[400px]:text-[20px] max-[640px]:text-[22px] ml-[2.9rem] max-[768px]:ml-[2.5rem] max-[640px]:ml-[2rem]">{type}</span>}
      {type === 'Minutes' && <span className="min-[3840px]:text-[100px] xl:text-[35px] xl:ml-[4.5rem] text-[25px] max-[400px]:text-[20px] max-[640px]:text-[22px] ml-[3rem] max-[768px]:ml-[2.2rem] max-[640px]:ml-[2rem]">{type}</span>}
      {type === 'Seconds' && <span className="min-[3840px]:text-[100px] xl:text-[35px] xl:ml-[4rem] text-[25px] max-[400px]:text-[20px] max-[640px]:text-[22px] ml-[3rem] max-[768px]:ml-[2rem] max-[640px]:ml-[1.5rem]">{type}</span>}
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter flex items-center">
      <DateTimeDisplay value={days} type={'Days'} />
      <DateTimeDisplay value={hours} type={'Hours'} />
      <DateTimeDisplay value={minutes} type={'Minutes'} />
      <DateTimeDisplay value={seconds} type={'Seconds'} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = UseCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <section className='flex justify-center'>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </section>
    );
  }
};

export default CountdownTimer;
