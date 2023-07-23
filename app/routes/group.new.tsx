export default function GroupNew() {
  return (
    <div className="border-2 ml-3 pl-4 pt-4 pb-4">
      <div>
        <div className="flex flex-col w-full items-center justify-center">
          <div>
            <h1>Create New Group</h1>
          </div>
          <div>
            <h2>Your Community Starts Here</h2>
          </div>
        </div>
      </div>
      <div className="flex pt-4">
        <div className="flex-col">
          <div className="w-1/2 pb-4">
            <label>
              Group Name:
              <input className="bg-grayBackground" name="groupName" type="text" required />
            </label>
          </div>
          <div className="w-1/2 pb-4">
            <label>
              Location:
              <input className="bg-grayBackground" name="location" type="text" required />
            </label>
          </div>
        </div>
        <div className="flex-col">
          <div className="w-1/2 pb-4">
            <label>
              Group Topics:
              <select name="groupTopics" id="groupTopics">
                <option value="Tennis">Tennis</option>
                <option value="Golf">Golf</option>
                <option value="Pickleball">Pickleball</option>
                <option value="D&D">D&D</option>
              </select>
            </label>
          </div>
          <div className="w-1/2 pb-4">
            <label>
              Discord Channel:
              <input className="bg-grayBackground" name="discordChannel" type="text" />
            </label>
          </div>
        </div>
      </div>
      <div className="flex-col pb-4">
        <label>
          Description:
          <textarea name="description" rows="5" cols="33" required></textarea>
        </label>
      </div>
      <div className="flex-row justify-end">
        <div>
          <label>Attach Image</label>
        </div>
        <div>
          <button className="border-2 w-24 bg-red-700 text-white rounded-lg " type="submit">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
