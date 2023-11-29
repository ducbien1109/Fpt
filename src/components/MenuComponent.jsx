import { Menu } from "antd";
function MenuComponent() {
  return (
    <div className="menu-header">
      <Menu
      
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={new Array(10).fill(null).map((_, index) => {
        const key = index + 1;
        return {
          key,
          label: `nav ${key}`,
        };
      })}
    />
    </div>
  );
}
export default MenuComponent;
