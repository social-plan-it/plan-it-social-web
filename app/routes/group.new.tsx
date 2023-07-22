export default function GroupNew() {
  return (
    <div className="mb-20">
      <div>
        <div className="flex flex-col w-full items-center justify-center mt-5 lg:mt-40">
          <div>
            <h1>Create New Group</h1>
          </div>
          <div>
            <h2>Your Community Starts Here</h2>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-col">
          <div className="w-1/2">
            <label>
              Group Name:
              <input className="bg-grayBackground" name="groupName" type="text" required />
            </label>
          </div>
          <div className="w-1/2">
            <label>
              Location:
              <input className="bg-grayBackground" name="location" type="text" required />
            </label>
          </div>
        </div>
        <div className="flex-col">
          <div className="w-1/2">
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
          <div className="w-1/2">
            <label>
              Discord Channel:
              <input className="bg-grayBackground" name="discordChannel" type="text" />
            </label>
          </div>
        </div>
      </div>
      <div className="flex-col">
        <label>
          Description:
          <input className="bg-grayBackground" name="description" type="text" required />
        </label>
      </div>
    </div>
  );
}
