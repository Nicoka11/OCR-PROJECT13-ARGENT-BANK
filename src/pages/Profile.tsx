import { LocalStorageKeys } from "@src/constants/constants";
import { useUpdateProfileMutation } from "@src/services/argentBank";
import {
  UpdateProfilePayload,
  UserProfile,
  UserProfileBody,
} from "@src/services/argentBank.interface";
import authRedirection from "@src/utils/authRedirection";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

export interface Inputs {
  firstName: string;
  lastName: string;
}

const Profile = () => {
  authRedirection();
  const [updateProfile] = useUpdateProfileMutation();
  const profile: UserProfileBody = JSON.parse(
    localStorage.getItem(LocalStorageKeys.UserProfile) as string
  );
  const [showNameEdit, setShowNameEdit] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>({ mode: "onTouched" });
  const onCancel = (e: FormEvent) => {
    e.preventDefault();
    setShowNameEdit(false);
  };
  const [name, setName] = useState<Inputs>({
    firstName: profile.firstName,
    lastName: profile.lastName,
  });
  const onSubmit = async (data: Inputs) => {
    const payload: UpdateProfilePayload = {
      firstName: data.firstName || name.firstName,
      lastName: data.lastName || name.lastName,
    };
    const newProfile = (await updateProfile(payload)) as UserProfile;
    localStorage.setItem(
      LocalStorageKeys.UserProfile,
      JSON.stringify(newProfile.data?.body)
    );
    setName(payload);
    setShowNameEdit(false);
  };
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {name.firstName} {name.lastName}
        </h1>
        {showNameEdit ? (
          <div className="edit-name">
            <form className="edit-name-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="edit-name-content">
                <div className="input-wrapper">
                  <input {...register("firstName")} />
                </div>
                <div className="input-wrapper">
                  <input {...register("lastName")} />
                </div>
              </div>
              <div className="edit-name-content">
                <input
                  type="submit"
                  value="Save"
                  className="edit-btn sign-in-button"
                />
                <button onClick={onCancel} className="edit-btn sign-in-button">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button className="edit-button" onClick={() => setShowNameEdit(true)}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default Profile;
