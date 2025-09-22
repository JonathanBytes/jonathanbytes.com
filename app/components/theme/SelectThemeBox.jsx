const SelectThemeBox = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="theme-box"
    >
      <option value="gruvbox">Gruvbox &#x1F39E;</option>
      <option value="catppuccin">Catppuccin &#x1F431;</option>
    </select>
  );
};

export default SelectThemeBox;
