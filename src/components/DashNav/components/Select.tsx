import tw from "twin.macro";

interface SelectInterface {
  options: string[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectName: string;
}

const Select = (props: SelectInterface) => {
  const { options, handleChange, selectName } = props;
  // console.log("OPTIONS", options);
  return (
    <div>
      <select
        tw="mx-10 rounded"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}
        name={selectName}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
