import tw from "twin.macro";

interface SelectInterface {
  options: string[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = (props: SelectInterface) => {
  const { options, handleChange } = props;
  // console.log("OPTIONS", options);
  return (
    <div>
      <select
        tw="mx-10 rounded"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
