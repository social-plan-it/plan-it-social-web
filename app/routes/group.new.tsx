export default function GroupNew() {
  return (
    <div>
      <>
        <div className="flex w-full items-center justify-center mt-20 lg:mt-40">
          <div>
            <h1>Create New Group</h1>
          </div>
          <div>
            <h2>Your Community Starts Here</h2>
          </div>
        </div>
      </>
      <>
        <div className="flex flex-row w-full mb-4 outline-style: double">
          <div>
            <div className="w-1/2">
              <label>
                Group Name:
                <input className="bg-grayBackground" name="groupName" type="text" required />
              </label>
            </div>
            <div className="w-1/2">
              <label>
                Group Topics:
                <select name="topics" id="topics">
                  <option value="Tennis">Tennis</option>
                  <option value="Golf">Golf</option>
                  <option value="Pickleball">Pickleball</option>
                  <option value="D&D">D&D</option>
                </select>
              </label>
            </div>
          </div>
          <div>
            <div className="w-1/2">
              <label>
                Location:
                <input className="bg-grayBackground" name="location" type="text" required />
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
      </>
    </div>
  );
}
