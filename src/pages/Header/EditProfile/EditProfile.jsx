import React, { useState } from "react";
import "./EditProfile.css"; // Импортируем CSS файл

function EditProfile() {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [secondNameError, setSecondNameError] = useState("");
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleSaveChanges = () => {
        // Ваша логика обработки сохранения изменений здесь
        if (newPassword !== confirmNewPassword) {
            setPasswordMismatch(true);
        } else {
            setPasswordMismatch(false);
        }
    };

    const togglePasswordVisibility = (field) => {
        if (field === "current-password") {
            setShowCurrentPassword(!showCurrentPassword);
        } else if (field === "new-password") {
            setShowNewPassword(!showNewPassword);
        } else if (field === "confirm-new-password") {
            setShowConfirmNewPassword(!showConfirmNewPassword);
        }
    };

    const handleFirstNameInput = (e) => {
        const value = e.target.value;
        // Проверка на наличие запрещенных символов в имени
        const regex = /^[A-Za-z]+$/;
        if (!regex.test(value)) {
            setFirstNameError("Please enter a valid first name.");
        } else {
            setFirstNameError(""); // Очищаем ошибку, если она была
        }
        setFirstName(value);
    };

    const handleSecondNameInput = (e) => {
        const value = e.target.value;
        // Проверка на наличие запрещенных символов в фамилии
        const regex = /^[A-Za-z]+$/;
        if (!regex.test(value)) {
            setSecondNameError("Please enter a valid last name.");
        } else {
            setSecondNameError(""); // Очищаем ошибку, если она была
        }
        setSecondName(value);
    };

    return (
        <div className="profile-container">
            <h1 className="profile-heading">Edit Your Profile</h1>
            <table className="profile-table">
                <tbody>
                    <tr>
                        <td className="profile-cell">First Name:</td>
                        <td className="profile-cell">Second Name:</td>
                    </tr>
                    <tr>
                        <td className="profile-cell">
                            <input
                                type="text"
                                id="first-name"
                                name="first-name"
                                placeholder="John"
                                value={firstName}
                                onInput={handleFirstNameInput}
                                required
                            />
                            {firstNameError && <p className="error-message">{firstNameError}</p>}
                        </td>
                        <td className="profile-cell">
                            <input
                                type="text"
                                id="second-name"
                                name="second-name"
                                placeholder="Smith"
                                value={secondName}
                                onInput={handleSecondNameInput}
                                required
                            />
                            {secondNameError && <p className="error-message">{secondNameError}</p>}
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="profile-table">
                <tbody>
                    <tr>
                        <td className="profile-cell">Email:</td>
                        <td className="profile-cell">Address:</td>
                    </tr>
                    <tr>
                        <td className="profile-cell">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@mail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </td>
                        <td className="profile-cell">
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Kingston, 5236, United States"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="profile-table">
                <tbody>
                    <tr>
                        <td className="profile-cell">Password Changes:</td>
                    </tr>
                    <tr>
                        <td className="profile-cell">
                            <input
                                type={showCurrentPassword ? "text" : "password"}
                                id="current-password"
                                name="current-password"
                                placeholder="Current Password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                            />
                            <span
                                id="current-password-toggle"
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility("current-password")}
                            >
                                {showCurrentPassword ? "👁️" : "🔒"}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="profile-cell">
                            <input
                                type={showNewPassword ? "text" : "password"}
                                id="new-password"
                                name="new-password"
                                placeholder="Create New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <span
                                id="new-password-toggle"
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility("new-password")}
                            >
                                {showNewPassword ? "👁️" : "🔒"}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="profile-cell">
                            <input
                                type={showConfirmNewPassword ? "text" : "password"}
                                id="confirm-new-password"
                                name="confirm-new-password"
                                placeholder="Confirm New Password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                required
                            />
                            <span
                                id="confirm-new-password-toggle"
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility("confirm-new-password")}
                            >
                                {showConfirmNewPassword ? "👁️" : "🔒"}
                            </span>
                            {passwordMismatch && <p className="error-message">Passwords do not match.</p>}

                        </td>
                    </tr>
                </tbody>
            </table>
            <button
                type="button"
                className="blackButton"
                onClick={handleSaveChanges}
            >
                Save Changes
            </button>
        </div>
    );
}

export default EditProfile;
