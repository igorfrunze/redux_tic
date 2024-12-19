import { useSelector } from 'react-redux';

const Log = () => {
  const logData = useSelector((state) => state.logData);
  return (
    <div className="absolute bg-amber-300 w-48 flex flex-row justify-center ml-16 mt-96">
      <ul>
        {logData.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default Log;
