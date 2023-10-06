import styles from "./DetailProductColors.module.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { isColorLight } from "../../utils/colorformatting";

const DetailProductColors = ({ colorList, values }) => {
    const buttons = [];
    const [color, setColor] = useState(values.color);

    const handleColorChange = (value) => {
        setColor(value);
        values.color = value;
    };

    for (let i of colorList) {
        buttons.push(
            <div key={i}>
                <Field
                    type="radio"
                    name="color"
                    checked={color === i}
                    onChange={() => handleColorChange(i)}
                    value={1}
                    id={i}
                />
                <label htmlFor={i}>
                    <span style={{ backgroundColor: i }}>
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg"
                            alt="Checked Icon"
                            style={{
                                filter: `${
                                    isColorLight(i)
                                        ? "brightness(0)"
                                        : "brightness(1)"
                                }`,
                            }}
                        />
                    </span>
                </label>
            </div>
        );
    }

    return <div className={styles.customRadios}>{buttons}</div>;
};

DetailProductColors.propTypes = {
    colorList: PropTypes.array,
    values: PropTypes.object,
};

export default DetailProductColors;
