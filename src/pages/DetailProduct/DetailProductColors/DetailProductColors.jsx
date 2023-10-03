import styles from "./DetailProductColors.module.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

const DetailProductColors = ({ amount, colorList, values }) => {
    const buttons = [];
    const [selectedColor, setSelectedColor] = useState(values.color);

    const handleColorChange = (value) => {
        setSelectedColor(value);
        values.color = colorList[value];
    };

    for (let i = 0; i <= amount - 1; i++) {
        const colorValue = i + 1;
        buttons.push(
            <div key={colorValue}>
                <Field
                    type="radio"
                    name="color"
                    checked={selectedColor === colorValue}
                    onChange={() => handleColorChange(colorValue)}
                    value={1}
                    id={colorValue}
                />
                <label htmlFor={colorValue}>
                    <span style={{ backgroundColor: colorList[colorValue] }}>
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                            alt="Checked Icon"
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
