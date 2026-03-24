import Button from "../../Components/Button";
import FileUpload from "./FileUpload";

export default function CreatePin() {
    return (
        <div>
            <div className="border-y border-olive-300 flex items-center justify-between pr-26">
                <h1 className="text-xl font-bold py-5 px-5">Create Pin</h1>
                <div className="relative">
                    <Button onClick={() => alert("Pin created!")}>Publish</Button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-10 py-10 pb-40">
                <div className="flex gap-12 items-start">
                <FileUpload />

                <div className="flex-1 flex flex-col gap-16">
                    <div>
                        <label className="text-xs font-semibold text-gray-500">Title</label>
                    <input 
                        type="text" 
                        placeholder="Add your title" 
                        className="w-full rounded-xl bg-olive-200 py-3 px-4 text-body" 
                    />
                    </div>
                
                    <div>
                        <label className="text-xs font-semibold text-gray-500">Description</label>
                    <input 
                        type="text" 
                        placeholder="Add a detailed description" 
                        className="w-full rounded-xl bg-olive-200 py-3 px-4 text-body h-32" 
                    />
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-500">Link</label>
                    <input 
                        type="text" 
                        placeholder="Add a link" 
                        className="w-full rounded-xl bg-olive-200 py-3 px-4 text-body" 
                    />
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-500">Board</label>
                        <select className="w-full rounded-xl bg-olive-200 py-3 px-4 text-body text-gray-500">
                            <option>Choose a board</option>
                            <option>Recipes</option>
                            <option>Travel</option>
                            <option>Wellness/Lifestyle</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>     
 );
}

//need to make the title, descip. link, board drop under the file upload when resizing