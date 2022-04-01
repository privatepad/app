import { ethers } from "ethers";
import { useForm } from "react-hook-form";
import Input from "../form/Input";
// import Label from "../form/Label";
import Error from "../form/Error";
import useFactory from "../../hooks/useFactory";

function FeeForm() {
  const { fee, setFee } = useFactory();

  const { state, events, send } = setFee;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    await send(ethers.utils.parseEther(data.fee));
  });

  return (
    <div className="grid grid-cols-2 gap-8 bg-white p-6 mb-8 rounded-lg border">
      <div>
        <form className="flex flex-col gap-2 mt-2" onSubmit={onSubmit}>
          <div className="flex items-center gap-4">
            <div>
              <Input
                id="fee"
                attributes={{ ...register("fee", { required: true }) }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-400 hover:bg-emerald-500 text-white rounded-lg w-full uppercase font-semibold"
              >
                Set Fee
              </button>
            </div>
            <div className="flex-1">
              <p>
                Current Fee:{" "}
                {fee && <code>{ethers.utils.formatEther(fee)}</code>}
              </p>
            </div>
          </div>

          <div>
            {errors.fee?.type === "required" && (
              <Error message="Fee is required." />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeeForm;
