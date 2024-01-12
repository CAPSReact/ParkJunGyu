import PropTypes from "prop-types";

export default function Welcome({ name }) {
  return (
    <div>
      환영합니다. <br />
      {name}
    </div>
  );
}
// 함수의 인자로 props를 받고 사용할 수 있습니다.
// 이 때, props는 중괄호({})로 감싸야 합니다.

Welcome.propTypes = {
  name: PropTypes.string,
};
