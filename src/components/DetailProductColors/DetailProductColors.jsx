import styles from "./DetailProductColors.module.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
// import { darkenHexColor } from "../../utils/colorformatting";

const DetailProductColors = ({ amount, colorList, values }) => {
    const buttons = [];
    const [color, setColor] = useState(values.color);

    const handleColorChange = (value) => {
        setColor(value);
        values.color = colorList[value];
    };

    for (let i = 0; i < amount; i++) {
        const colorValue = i + 1;
        buttons.push(
            <div key={colorValue}>
                <Field
                    type="radio"
                    name="color"
                    checked={color === colorValue}
                    onChange={() => handleColorChange(colorValue)}
                    value={1}
                    id={colorValue}
                />
                <label htmlFor={colorValue}>
                    <span style={{ backgroundColor: colorList[colorValue]}}>
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                            alt="Checked Icon"
                            style={{ filter: "brightness(0.7)" }}
                        />
                    </span>
                </label>
            </div>
        );
    }

    return <div className={styles.customRadios}>{buttons}</div>;
};

DetailProductColors.propTypes = {
    amount: PropTypes.number.isRequired,
    colorList: PropTypes.array,
    values: PropTypes.object,
};

export default DetailProductColors;
