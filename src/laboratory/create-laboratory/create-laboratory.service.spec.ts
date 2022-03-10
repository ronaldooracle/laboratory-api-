import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Laboratory } from '../../entitys/laboratory.entity';
import { CreateLaboratoryService } from './create-laboratory.service';
import RequestCreateLatoratoryDTO from '../dtos/request-create-laboratory.dto';


const mockParams : RequestCreateLatoratoryDTO = {
  laboratory: 'Teste Dev',
  active: true,
  address: 'string'
};

describe('CreateLaboratoryService', () => {
  let service: CreateLaboratoryService;
  let laboratoryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateLaboratoryService,
        {
          provide: getRepositoryToken(Laboratory),
          useFactory: () => ({
            save: jest.fn(),
            create: jest.fn(),
          }),
        },
      ],
    }).compile();
    service = module.get<CreateLaboratoryService>(CreateLaboratoryService);
    laboratoryRepository = module.get(getRepositoryToken(Laboratory));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create and save a new laboratory', async () => {
    const savemockParams= { ...mockParams };
    laboratoryRepository.save.mockResolvedValue(savemockParams);
    laboratoryRepository.create.mockReturnValueOnce(new Laboratory());

    const resultExecute = await service.execute({address: mockParams.address,active: mockParams.active , laboratory: mockParams.laboratory});

    expect(resultExecute).toEqual(savemockParams);
    expect(laboratoryRepository.save).toHaveBeenCalledWith({
        address: mockParams.address,
      active: mockParams.active,
      laboratory: mockParams.laboratory
    });
    expect(laboratoryRepository.create).toHaveBeenCalledTimes(1);
    expect(laboratoryRepository.save).toHaveBeenCalledTimes(1);
  });
});
